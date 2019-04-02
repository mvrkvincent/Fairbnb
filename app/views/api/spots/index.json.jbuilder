@spots.each do |spot|
  debugger
  json.set! spot.id do
    json.partial! 'api/spots/spot', spot: spot
  end
end