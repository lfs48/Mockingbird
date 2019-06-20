WebAuthn.configure do |config|
    # This value needs to match `window.location.origin` evaluated by
    # the User Agent during registration and authentication ceremonies.
    config.origin = "https://auth.mockingbird.com"
  
    # Relying Party name for display purposes
    config.rp_name = "Mockingbird"
  
    # You can optionally specify a different Relying Party ID
    # (https://www.w3.org/TR/webauthn/#relying-party-identifier)
    # if it differs from the default one.
    #
    # In this case the default would be "auth.example.com", but you can set it to
    # the suffix "example.com"
    #
    # config.rp_id = "example.com"
  end