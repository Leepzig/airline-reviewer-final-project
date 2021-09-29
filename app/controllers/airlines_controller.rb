class AirlinesController < ApplicationController

  
  def index
    render json: Airline.all
  end

  def show
    airline = Airline.find_by_id(params[:id])
    if airline
      render json: airline, serializer:AirlineReviewsSerializer
    else
      render json: {error: "airline not found"}
    end
  end


end
