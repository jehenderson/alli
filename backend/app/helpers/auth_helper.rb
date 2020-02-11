module AuthHelper

  # App's client ID. Register the app in Application Registration Portal to get this value.
  CLIENT_ID = ENV["LINKEDIN_KEY"]
  # App's client secret. Register the app in Application Registration Portal to get this value.
  CLIENT_SECRET = ENV["LINKEDIN_SECRET"]

  # Scopes required by the app
  SCOPES = [ 'r_liteprofile',
             'r_emailaddress']

  REDIRECT_URI = "http://localhost/api/v1/auth/linkedin/callback"

  # Generates the login URL for the app.
  def get_login_url
    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://www.linkedin.com',
                                :authorize_url => '/oauth/v2/authorization',
                                :token_url => '/oauth/v2/authorization')
    login_url = client.auth_code.authorize_url(:redirect_uri => REDIRECT_URI, :scope => SCOPES.join(' '))
  end

  # Exchanges an authorization code for a token
  # def get_token_from_code(auth_code)
  #   client = OAuth2::Client.new(CLIENT_ID,
  #                               CLIENT_SECRET,
  #                               :site => 'https://www.linkedin.com',
  #                               :authorize_url => '/oauth/v2/authorization',
  #                               :token_url => '/oauth/v2/authorization')
  #
  #   token = client.auth_code.get_token(auth_code,
  #                                      :redirect_uri => REDIRECT_URI,
  #                                      :scope => SCOPES.join(' '))
  # end
end
