class AuthController < ApplicationController
  include AuthHelper

  def gettoken
    token = get_token_from_code params[:code]
    session[:linkedin_token] = token.to_hash
    render json: {session: session[:linkedin_token]}
    #redirect_to "/api/v1/supporters"
  end

  def getredirect
    render json: {url: get_login_url}
  end
end
