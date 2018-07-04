class Api::PokemonController < ApplicationController

  def create
  end

  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end


  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves)
  end
end
