require "test_helper"

class LaddingpageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get laddingpage_index_url
    assert_response :success
  end
end
