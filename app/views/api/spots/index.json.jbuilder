@spots.each do |spot|
  json.set! spot.id do
    json.partial! 'api/spots/spot', spot: spot
  end
end