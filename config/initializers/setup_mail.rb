ActionMailer::Base.smtp_settings = {  
  :address              => "smtp.gmail.com",  
  :port                 => 587,  
  :domain               => "gmail.com",  
  :user_name            => "info.resume2013@gmail.com",  
  :password             => "secret",  
  :authentication       => "plain",  
  :enable_starttls_auto => true  
} 
