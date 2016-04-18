# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :firestorm, Firestorm.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "Z2Zb0mQPdDUNnKDVQj5M835vBtBXX5e5wtIMk3W5PMbYD0UIkhX4o4C2fdSMQ5M4",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Firestorm.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :ueberauth, Ueberauth,
  providers: [
    identity: {Ueberauth.Strategy.Identity, [callback_methods: ["POST"]]}
  ]

config :guardian, Guardian,
  issuer: "Firestorm",
  ttl: {30, :days},
  secret_key: "AtbaKoY0+ZQPNHxJlfyCrZZqHoNZMQ3fAln6UZXQVouXOrZeb53pSNoY6sbr9xPd",
  serializer: Firestorm.GuardianSerializer,
  permissions: %{default: [:read, :write]}
