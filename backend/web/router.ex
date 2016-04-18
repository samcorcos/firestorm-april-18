defmodule Firestorm.Router do
  use Firestorm.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :api_auth do
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  scope "/", Firestorm do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api" do
    pipe_through :api

    resources "/users", Firestorm.UserController, except: [:new, :edit]
  end

  scope "/auth" do
    pipe_through [:api, :api_auth]

    post "/:identity/callback", AuthController, :callback
  end
end
