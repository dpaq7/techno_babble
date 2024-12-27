# Star Trek Techno-Babble Generator

A Star Trek-themed web application that generates authentic-sounding technobabble solutions using the iconic LCARS (Library Computer Access/Retrieval System) interface design!

## Features

- Three distinct technobabble templates:
  1. **Basic Technical Solution**: Perfect for quick fixes and common problems
  2. **Emergency Response**: Ideal for crisis situations and urgent repairs
  3. **Complex Solution**: For those challenging problems that require advanced solutions

- Authentic Star Trek LCARS interface design:
  - Classic orange and purple color scheme
  - Characteristic curved edges and asymmetrical borders
  - Futuristic typography and layout
  - Responsive design for all devices

- Interactive features:
  - Dropdown menus for customizing each part of the solution
  - "Randomize All" button for instant technobabble generation
  - Real-time updates as you make selections

## Installation

1. Clone the repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

1. Activate your virtual environment if not already activated
2. Run the Flask application:
   ```bash
   python app.py
   ```
3. Open your browser and navigate to `http://localhost:5001`

## Project Structure

```
techno-babble/
├── static/
│   ├── css/
│   │   └── style.css      # LCARS-inspired styling
│   └── js/
│       └── script.js      # Template word lists and logic
├── templates/
│   └── index.html         # Main interface with three templates
├── tests/
│   └── test_app.py
├── trek madlib library.txt # Source templates and word lists
├── app.py
├── requirements.txt
└── README.md
```

## Templates

1. **Basic Technical Solution**:
   ```
   "If we [ACTION] the [SYSTEM] to emit a [PARTICLE] [EMISSION], we should be able to [RESULT]."
   ```

2. **Emergency Response**:
   ```
   "We could [CREATE] a [TECHNICAL] [LOCATION] by [ACTION] the [SYSTEM] through the [SECONDARY]!"
   ```

3. **Complex Solution**:
   ```
   "By [PROCESS] a [MODIFIER] [ENERGY] [PATTERN] using the [TOOL], we might be able to [ACTION] their [TARGET] with a [MODIFIER] [EMISSION]!"
   ```

## Contributing

Feel free to contribute by:
- Adding new technical terms to the templates
- Improving the LCARS interface design
- Adding new templates based on classic Star Trek episodes
- Fixing bugs or improving functionality

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Star Trek's creative use of technical jargon
- LCARS interface design based on Star Trek: The Next Generation's computer systems
- Word lists and templates inspired by classic Star Trek episodes
