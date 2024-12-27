import pytest
from app import app
import json

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_index_route(client):
    response = client.get('/')
    assert response.status_code == 200

def test_words_api(client):
    response = client.get('/api/words')
    assert response.status_code == 200
    data = json.loads(response.data)
    
    # Check if all word lists are present
    required_lists = [
        'technical_processes',
        'modifying_words',
        'energy_types',
        'patterns',
        'primary_tools',
        'action_verbs',
        'target_systems',
        'modifiers',
        'emission_types'
    ]
    
    for word_list in required_lists:
        assert word_list in data
        assert isinstance(data[word_list], list)
        assert len(data[word_list]) > 0

def test_random_api(client):
    response = client.get('/api/random')
    assert response.status_code == 200
    data = json.loads(response.data)
    
    # Check if all required fields are present
    required_fields = [
        'technical_process',
        'modifying_word',
        'energy_type',
        'pattern',
        'primary_tool',
        'action_verb',
        'target_system',
        'modifier',
        'emission_type'
    ]
    
    for field in required_fields:
        assert field in data
        assert isinstance(data[field], str)
        assert len(data[field]) > 0
