class AuthController < ApplicationController
  include AuthHelper

  def gettoken
    token = get_token_from_code params[:code]
    session[:linkedin_token] = token.to_hash

    li_resp = Faraday.get('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName)') do |req|
      req.headers['Content-Type'] = "application/json"
      req.headers['Authorization'] = "Bearer #{get_access_token}"
    end

    email_resp = Faraday.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))') do |req|
      req.headers['Content-Type'] = "application/json"
      req.headers['Authorization'] = "Bearer #{get_access_token}"
    end

    li_data = JSON.parse(li_resp.body)
    email_data = JSON.parse(email_resp.body)

    country = li_data["firstName"]["preferredLocale"]["country"]
    language = li_data["firstName"]["preferredLocale"]["language"]
    localizer = "#{language}_#{country}"

    supporter_data = {
      first_name: li_data["firstName"]["localized"][localizer],
      last_name: li_data["lastName"]["localized"][localizer],
      email: email_data["elements"][0]["handle~"]["emailAddress"],
      linkedin_id: li_data["id"]
    }

    if Supporter.find_by linkedin_id: supporter_data[:linkedin_id]
      redirect "/"
    else
      Faraday.post('http://localhost/api/v1/supporters', supporter_data)
    end

    redirect_to "/api/v1/supporters"
  end

  def getredirect
    render json: {url: get_login_url}
  end
end
