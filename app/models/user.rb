class User < ApplicationRecord 
    validates :username, :password_digest, presence: true

    has_many :shares
    has_many :shared_secrets
        through: :shares,
        source: :secret
end