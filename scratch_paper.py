from google_scholar_py import CustomGoogleScholarProfiles
import json

parser = CustomGoogleScholarProfiles()
data = parser.scrape_google_scholar_profiles(
    query='blizzard',
    pagination=False,
    save_to_csv=False,
    save_to_json=False
)
print(json.dumps(data, indent=2))