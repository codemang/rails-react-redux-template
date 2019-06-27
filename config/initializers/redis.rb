class Redis
  class << self
    alias_method :orig_new, :new
  end

  def self.new(*args)
    args = {} if args.empty?
    Redis.orig_new(Rails.application.config_for(:redis).merge(args))
  end
end
