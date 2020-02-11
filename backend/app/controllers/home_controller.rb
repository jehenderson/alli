class HomeController < ApplicationController
  include AuthHelper
  def index
    render json: { message: get_login_url }
  end
end
