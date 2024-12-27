const wordLists = {
    // Template 1: Basic Technical Solution
    action_verb: [
        'Modify',
        'Reconfigure',
        'Reroute',
        'Initialize',
        'Calibrate'
    ],
    ship_system: [
        'Deflector dish',
        'Main sensors',
        'Shield generators',
        'EPS conduits',
        'Warp core'
    ],
    particle_type: [
        'Tachyon',
        'Verteron',
        'Chronoton',
        'Tetryon',
        'Graviton'
    ],
    emission_type: [
        'Pulse',
        'Beam',
        'Field',
        'Wave',
        'Burst'
    ],
    desired_result: [
        'Penetrate their shields',
        'Break through the interference',
        'Detect their ships',
        'Disrupt their weapons',
        'Establish communication',
        'Bypass their shields',
        'Deactivate their shields',
        'Power up console',
        'Access corrupted data',
        'Bypass security',
        'Deactivate security',
        'Access environmental controls'
    ],

    // Template 2: Emergency Response
    create_action: [
        'Generate',
        'Create',
        'Establish',
        'Project',
        'Initialize'
    ],
    technical_noun: [
        'Feedback',
        'Resonance',
        'Containment',
        'Interference',
        'Dampening'
    ],
    location: [
        'Matrix',
        'Field',
        'Grid',
        'Array',
        'Network'
    ],
    technical_action: [
        'Routing',
        'Channeling',
        'Cycling',
        'Looping',
        'Cascading'
    ],
    system: [
        'Primary power',
        'Shield harmonics',
        'Sensor array',
        'Computer core',
        'Phaser banks'
    ],
    secondary_system: [
        'Auxiliary processors',
        'Secondary buffers',
        'Backup generators',
        'Emergency systems',
        'Reserve power cells'
    ],

    // Template 3: Complex Solution
    technical_process: [
        'Initializing',
        'Configuring',
        'Implementing',
        'Modulating',
        'Programming'
    ],
    modifying_word: [
        'Rotating',
        'Cascading',
        'Inverse',
        'Phased',
        'Recursive'
    ],
    energy_type: [
        'Subspace',
        'Quantum',
        'Temporal',
        'Warp',
        'Plasma'
    ],
    pattern: [
        'Algorithm',
        'Sequence',
        'Protocol',
        'Pattern',
        'Format'
    ],
    primary_tool: [
        'Main computer',
        'Sensor array',
        'Shield matrix',
        'Deflector array',
        'Warp core'
    ],
    action_verb2: [
        'Disrupt',
        'Override',
        'Bypass',
        'Neutralize',
        'Deactivate'
    ],
    target_system: [
        'Weapons',
        'Shields',
        'Sensors',
        'Communications',
        'Propulsion'
    ],
    modifier: [
        'Focused',
        'Concentrated',
        'Amplified',
        'Enhanced',
        'Synchronized'
    ],
    emission_type2: [
        'Burst',
        'Pulse',
        'Beam',
        'Wave',
        'Field'
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Populate all dropdowns
    for (const [key, values] of Object.entries(wordLists)) {
        const select = document.getElementById(key);
        if (select) {
            values.forEach(value => {
                const option = document.createElement('option');
                option.value = value.toLowerCase();
                option.textContent = value;
                select.appendChild(option);
            });
        }
    }

    // Function to get a random item from an array
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Function to randomize all dropdowns
    function randomizeAll() {
        for (const [key, values] of Object.entries(wordLists)) {
            const select = document.getElementById(key);
            if (select) {
                const randomValue = getRandomItem(values).toLowerCase();
                select.value = randomValue;
            }
        }
    }

    // Add click handler for randomize button
    document.getElementById('randomize').addEventListener('click', randomizeAll);

    // Initial randomization
    randomizeAll();
});
