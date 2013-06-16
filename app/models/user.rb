class User < ActiveRecord::Base
  attr_accessible :body, :email, :name, :subject
end
