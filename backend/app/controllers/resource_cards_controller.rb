class ResourceCardsController < ApplicationController
  def index
    @cards = ResourceCard.all
    render json: @cards, status: :ok
  end

  def create
    @card = ResourceCard.new(card_params)
    @card.save
    render json: @card, status: :created
  end

  def show
    @card = ResourceCard.where(id: params[:id]).first
    render json: @card, status: :ok
  end

  def destroy
    @card = ResourceCard.where(id: params[:id]).first
    if @card.destroy
      head(:ok)
    else head(:unprocessable_entity)
    end
  end

  private

  def card_params
    params.require(:resource_card).permit(:identifier, :heading, :content)
  end
end
