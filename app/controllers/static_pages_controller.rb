class StaticPagesController < ApplicationController
  def home
  	@some_value = "test string"
  end

  def help
  end
end
