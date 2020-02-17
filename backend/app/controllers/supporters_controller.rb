class SupportersController < ApplicationController
  def index
    @supporters = Supporter.all
    render json: @supporters, status: :ok
  end

  def create
    @supporter = Supporter.new(support_params)
    @supporter.save
    render json: @supporter, status: :created
  end

  def show
    @supporter = Supporter.where(id: params[:id]).first
    render json: @supporter, status: :ok
  end

  def destroy
    @supporter = Supporter.where(id: params[:id]).first
    if @supporter.destroy
      head(:ok)
    else head(:unprocessable_entity)
    end
  end

  private

  def support_params
    params.require(:supporter).permit(:first_name, :last_name, :email, :linkedin_id)
  end
end
