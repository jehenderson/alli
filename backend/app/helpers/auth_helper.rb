module AuthHelper

  # App's client ID. Register the app in Application Registration Portal to get this value.
  CLIENT_ID = ENV["LINKEDIN_KEY"]
  # App's client secret. Register the app in Application Registration Portal to get this value.
  CLIENT_SECRET = ENV["LINKEDIN_SECRET"]

  # Scopes required by the app
  SCOPES = [ 'r_liteprofile',
             'r_emailaddress']

  REDIRECT_URI = "http://ec2-54-174-180-197.compute-1.amazonaws.com/auth/linkedin/callback"

  # Generates the login URL for the app.
  def get_login_url
    client = OAuth2::Client.new(CLIENT_ID,
                                CLIENT_SECRET,
                                :site => 'https://www.linkedin.com',
                                :authorize_url => '/oauth/v2/authorization',
                                :token_url => '/oauth/v2/authorization')

    login_url = client.auth_code.authorize_url(:redirect_uri => REDIRECT_URI, :scope => SCOPES.join(' '))
  end
end
