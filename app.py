from flask import Flask, render_template, jsonify
import json
import random
import os

app = Flask(__name__)

def load_word_lists():
    with open(os.path.join('data', 'word_lists.json'), 'r') as f:
        return json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/words')
def get_words():
    return jsonify(load_word_lists())

@app.route('/api/random')
def get_random_babble():
    words = load_word_lists()
    random_words = {
        'technical_process': random.choice(words['technical_processes']),
        'modifying_word': random.choice(words['modifying_words']),
        'energy_type': random.choice(words['energy_types']),
        'pattern': random.choice(words['patterns']),
        'primary_tool': random.choice(words['primary_tools']),
        'action_verb': random.choice(words['action_verbs']),
        'target_system': random.choice(words['target_systems']),
        'modifier': random.choice(words['modifiers']),
        'emission_type': random.choice(words['emission_types'])
    }
    return jsonify(random_words)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
