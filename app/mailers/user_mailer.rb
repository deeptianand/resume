class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def response_email(user)
  	@user = user
  	@email = user.email
  	mail(:to => 'anandeepti@gmail.com'), :subject => user.subject)
  end
end
