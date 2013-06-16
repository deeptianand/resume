class UserMailer < ActionMailer::Base
	default :from => "anandeepti@gmail.com"
  def response_email(user)
  	@user = user
  	mail(:to => user.email, :subject => user.subject)
  end
end
