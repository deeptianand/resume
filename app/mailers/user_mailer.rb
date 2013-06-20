class UserMailer < ActionMailer::Base
	default :from => "info.resume2013@gmail.com"
  def response_email(user)
  	@user = user
  	mail(:to => user.email, :subject => "Thanks for your email")
  end

  def alert_email(user)
  	@user = user
  	mail(:to => "anandeepti@gmail.com", :subject => "You have a new email!")
  end
end
