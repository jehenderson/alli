class SupportersController < ApplicationController
  include AuthHelper
  def index
    resp = Faraday.get('https://api.linkedin.com/v2/me') do |req|
      req.headers['Content-Type'] = "application/json"
      req.headers['Authorization'] = "Bearer #{get_access_token}"
    end
    render text: resp.body
    # @cards = Supporter.all
    # render json: @cards, status: :ok
  end

  def create
    @card = Supporter.new(support_params)
    @card.save
    render json: @card, status: :created
  end

  def show
    @card = Supporter.where(id: params[:id]).first
    render json: @card, status: :ok
  end

  def destroy
    @card = Supporter.where(id: params[:id]).first
    if @card.destroy
      head(:ok)
    else head(:unprocessable_entity)
    end
  end

  private

  def support_params
    params.require(:supporter).permit(:first_name, :last_name, :profile_picture, :email)
  end
end
