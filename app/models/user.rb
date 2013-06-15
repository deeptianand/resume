class User < ActiveRecord::Base
  attr_accessible :email, :name, :body, :subject

  def change
  	create_table do |t|
  		t.string :email
  		t.string :name
  		t.string :body
  		t.string :subject
  	end
  end
end
