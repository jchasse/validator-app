class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes  :fname, :lname, :email, :mobile
end
