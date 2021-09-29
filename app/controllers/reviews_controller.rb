class ReviewsController < ApplicationController
  before_action :find_review, only: [:show, :destroy, :update]

  def index
    render json: Review.all
  end

  def show
    if @review
      render json: @review
    else
      render_not_found
    end
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: {errors: review.errors.full_messages}, status: 422
    end
  end

  def update
    if @review
      @review.update(review_params)
      render json: @review, status: 202
    else 
      render_not_found
    end
  end

  def destroy
    if @review
      @review.destroy
    else
      render_not_found
    end
  end

  private
    def review_params
      params.permit(:title, :content, :score, :content, :user_id, :airline_id)
    end

    def find_review
      @review = Review.find_by_id(params[:id])
    end

    def render_not_found
      render json: {error: "review not found"}
    end
end
