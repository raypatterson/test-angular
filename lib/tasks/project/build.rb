#!/usr/bin/env ruby

require './lib/modules/config'
require './lib/modules/site'
require './lib/modules/aws'

namespace :project do
  
  # Build Tasks
  namespace :build do
    
    desc "Project : Build : DEVELOPMENT"
    task :development do
      project_build Cfg.get_development_env
    end
    
    desc "Project : Build : REVIEW"
    task :review do
      project_build Cfg.get_review_env
    end
    
    desc "Project : Build : STAGING"
    task :staging do
      project_build Cfg.get_staging_env
    end
    
    desc "Project : Build : PRODUCTION"
    task :production do
      project_build Cfg.get_production_env
    end
    
  end
  
end

def project_build( env )

  puts ">>> Building to #{env}"

  Rake::Task["mm:build:#{env}"].invoke

  puts ">>> Deploying to #{env}"

  Dir.chdir ".."

  root = ( File.expand_path "." )

  static_root = "#{root}/frontend/build/"
  app_root = "#{root}/"
  webapp_root = "#{app_root}templates/"

  Rake::Task["project:utils:copy_files"].invoke static_root, webapp_root, [ "index.html" ]
  # Rake::Task["project:utils:change_file_extensions"].invoke webapp_root, "html", "mm"

  # asset_path_prefix = AWS.cloudfront_url env, "https"

  # puts "asset_path_prefix"
  # puts asset_path_prefix
  # file_list = [ "#{webapp_root}index.jsp" ]

  # Rake::Task["project:utils:prefix_asset_paths"].invoke asset_path_prefix, file_list

  # site_id = Site.get_id
  # app_target = site_id

  # package_filename = "#{site_id}-#{env}"

  # if env == Cfg.get_staging_env || env == Cfg.get_production_env
  #   package_filename = "#{package_filename}-#{Cfg.get_build_version}"
  # end

  # Rake::Task["project:utils:package_webapp"].invoke app_root, app_target, package_filename, env

end