class AuthController < ApplicationController

  def gettoken
    token = get_token_from_code params[:code]
    session[:linkedin_token] = token.to_hash
    render text: "Access token saved in session cookie."
  end
end
