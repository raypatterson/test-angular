class CompassConfigurator < Middleman::Extension

  option :output_style, :compact, 'Output Style'
  option :line_comments, false, 'Line Comments'

  def initialize(app, options_hash={}, &block)

    super

    $options = options

    app.compass_config do | config |

      puts ""
      puts "---------------------------------------------------"
      puts ""
      puts "  Compass Configurator"
      puts ""
      puts "    Output Style    : #{$options.output_style}"
      puts "    Line Comments   : #{$options.line_comments}"
      puts ""
      puts "---------------------------------------------------"
      puts ""

      # config is the Compass.configuration object

      config.output_style = $options.output_style
      config.line_comments = $options.line_comments

    end
  end
end

::Middleman::Extensions.register(:compass_configurator, CompassConfigurator)