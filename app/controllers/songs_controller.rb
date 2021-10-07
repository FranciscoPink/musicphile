class SongsController < ApplicationController
  before_action :set_genre, only: %i[create]
  before_action :set_artist, only: %i[create]
  before_action :set_song, only: %i[show update destroy create]
  def index
    @songs = Song.all
    render json: @songs, include: [:artist, :genre]
  end

  def show
    render json: @song
  end

  def create
    @song = Song.new(song_params)
    @song.genre = @genre
    @song.artist = @artist
    if @song.save
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  def update
    if @song.update song_params
      render json: @song
    else
      render json: @song.errors
    end
  end

  def destroy
    @song.destroy
  end

  private
  def set_genre
    @genre = Genre.find(params[:genre_id])
  end

  def set_artist
    @artist = Artist.find(params[:artist_id])
  end

  def set_song
    @song = Song.find params[:id]
  end

  def song_params
    params.require(:song).permit(:name)
  end
end
