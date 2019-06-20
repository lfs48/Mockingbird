class User < ApplicationRecord 
    validates :username, :password_digest, presence: true

    has_many :shares
<<<<<<< HEAD
    has_many :shared_secrets
        through: :shares,
        source: :secret
    
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
=======
    has_many :shared_secrets,
        through: :shares,
        source: :secret
    
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

<<<<<<< HEAD
  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
=======
  # def reset_session_token!
  #   generate_unique_session_token
  #   save!
  #   self.session_token
  # end

  private

  # def ensure_session_token
  #   generate_unique_session_token unless self.session_token
  # end

  # def new_session_token
  #   SecureRandom.urlsafe_base64
  # end

  # def generate_unique_session_token
  #   self.session_token = new_session_token
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = new_session_token
  #   end
  #   self.session_token
  # end
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7

end