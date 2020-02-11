module AuthHelper

  # App's client ID. Register the app in Application Registration Portal to get this value.
  CLIENT_ID = ENV["LINKEDIN_KEY"]
  # App's client secret. Register the app in Application Registration Portal to get this value.
  CLIENT_SECRET = ENV["LINKEDIN_SECRET"]

  # Scopes required by the app
  SCOPES = [ 'r_basicprofile',
             'r_emailaddress']

  REDIRECT_URI = "http://localhost/api/v1/auth/linkedin/callback"

  # Generates the login URL for the app.
  def get_login_url
    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://www.linkedin.com',
                                :authorize_url => '/oauth/v2/authorization',
                                :token_url => '/oauth/v2/accessToken')
    login_url = client.auth_code.authorize_url(:redirect_uri => REDIRECT_URI, :scope => SCOPES.join(' '))
  end

  # Exchanges an authorization code for a token
  def get_token_from_code(auth_code)
    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://www.linkedin.com',
                                :authorize_url => '/oauth/v2/authorization',
                                :token_url => '/oauth/v2/accessToken')

    token = client.auth_code.get_token(auth_code,
                                       :redirect_uri => REDIRECT_URI,
                                       :scope => SCOPES.join(' '))
  end

  # Gets the current access token
  def get_access_token
    # Get the current token hash from session
    token_hash = session[:linkedin_token]

    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://login.microsoftonline.com',
                                :authorize_url => '/oauth/v2/authorization',
                                :token_url => '/oauth/v2/accessToken')

    token = OAuth2::AccessToken.from_hash(client, token_hash)

    # Check if token is expired, refresh if so
    if token.expired?
      new_token = token.refresh!
      # Save new token
      session[:linkedin_token] = new_token.to_hash
      access_token = new_token.token
    else
      access_token = token.token
    end
  end
end
