module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
      keywords = @context.registers[:site].config['filtered_bibtex_keywords'] || []

      input = input.gsub(/^\s*_[^\s=]+\s*=.*(?:\n|\z)/, '')

      keywords.each do |keyword|
        input = input.gsub(/^\s*#{Regexp.escape(keyword)}\s*=.*(?:\n|\z)/, '')
      end

      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
