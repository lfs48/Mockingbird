class Secrets < ApplicationRecord 
    validates :message, :lat, :long, :time_start, :time_end, presence: true

    has_many :shares
    has_many :shared_users,
        through: :shares,
        source: :user
end