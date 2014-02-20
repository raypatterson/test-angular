class DeployAws < Middleman::Extension

  def initialize( app, options_hash = {}, &block )

    super

    app.after_configuration do | config |

      app.after_build do | builder |

        puts "====================================================="
        puts ""
        puts "Deploying to AWS"
        puts ""
        puts ""
        puts "Syncing S3 Origin"
        puts ""

        ::Middleman::S3Sync.sync

        puts ""
        puts "Invalidating CloudFront CDN"
        puts ""

        ::Middleman::Cli::CloudFront.new.invalidate

        puts ""
        puts "====================================================="
      end

    end

  end

end