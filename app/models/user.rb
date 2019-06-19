class User < ApplicationRecord 
    validates :username, :password_digest, presence: true
end