class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'something',
        guid: '0415674d-a0e8-4748-af68-a5f53a05c453'
      },
      {
        name: 'something else',
        guid: '328fcb71-f383-4de0-b1d8-d81a4c53ffcg'
      }
    ] }.to_json
  end
end
