const wordLists = {
    // Template 1: Basic Technical Solution
    action_verb: [
        'Modify',
        'Reconfigure',
        'Reroute',
        'Initialize',
        'Calibrate',
        'Amplify',
        'Enhance',
        'Synchronize',
        'Modulate',
        'Triangulate'
    ],
    ship_system: [
        'Tricorder',
        'Communicator',
        'Pattern enhancers',
        'Universal translator',
        'Medical scanner',
        'Phaser array',
        'Emergency beacon',
        'Environmental suit',
        'Portable shield generator',
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
        'Graviton',
        'Bio-neural',
        'Quantum',
        'Subspace',
        'Neutrino',
        'Positronic'
    ],
    emission_type: [
        'Pulse',
        'Beam',
        'Field',
        'Wave',
        'Burst',
        'Signal',
        'Frequency',
        'Resonance',
        'Pattern',
        'Matrix'
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
        'Access environmental controls',
        'Boost the signal strength',
        'Enhance sensor resolution',
        'Establish emergency transport',
        'Create a force field',
        'Neutralize the radiation',
        'Stabilize life support'
    ],

    // Template 2: Emergency Response
    create_action: [
        'Generate',
        'Create',
        'Establish',
        'Project',
        'Initialize',
        'Deploy',
        'Activate',
        'Configure',
        'Synchronize',
        'Calibrate'
    ],
    technical_noun: [
        'Feedback',
        'Resonance',
        'Containment',
        'Interference',
        'Dampening',
        'Forcefield',
        'Transporter lock',
        'Emergency beacon',
        'Bio-filter',
        'Stasis field'
    ],
    location: [
        'Matrix',
        'Field',
        'Grid',
        'Array',
        'Network',
        'Perimeter',
        'Zone',
        'Sector',
        'Chamber',
        'Corridor'
    ],
    technical_action: [
        'Routing',
        'Channeling',
        'Cycling',
        'Looping',
        'Cascading',
        'Scanning',
        'Analyzing',
        'Processing',
        'Filtering',
        'Enhancing'
    ],
    system: [
        'Tricorder',
        'Pattern enhancers',
        'Com badge',
        'Universal translator',
        'Medical scanner',
        'Emergency beacon',
        'Phaser rifle',
        'Shield generator',
        'Life support',
        'Environmental controls'
    ],
    secondary_system: [
        'Auxiliary processors',
        'Secondary buffers',
        'Backup generators',
        'Emergency systems',
        'Reserve power cells',
        'Portable replicator',
        'Emergency transporter',
        'Backup tricorder',
        'Secondary scanner',
        'Auxiliary communicator'
    ],

    // Template 3: Complex Solution
    technical_process: [
        'Initializing',
        'Configuring',
        'Implementing',
        'Modulating',
        'Programming',
        'Calibrating',
        'Synchronizing',
        'Triangulating',
        'Reconfiguring',
        'Optimizing'
    ],
    modifying_word: [
        'Rotating',
        'Cascading',
        'Inverse',
        'Phased',
        'Recursive',
        'Multi-phasic',
        'Bio-neural',
        'Quantum',
        'Harmonic',
        'Adaptive'
    ],
    energy_type: [
        'Subspace',
        'Quantum',
        'Temporal',
        'Warp',
        'Plasma',
        'Bio-electric',
        'Neural',
        'Positronic',
        'Psionic',
        'Tachyon'
    ],
    pattern: [
        'Algorithm',
        'Sequence',
        'Protocol',
        'Pattern',
        'Format',
        'Matrix',
        'Configuration',
        'Signature',
        'Frequency',
        'Resonance'
    ],
    primary_tool: [
        'Tricorder',
        'Medical tricorder',
        'Pattern enhancers',
        'Com badge',
        'Universal translator',
        'Phaser',
        'Medical scanner',
        'Emergency beacon',
        'Environmental suit',
        'Portable shield generator'
    ],
    action_verb2: [
        'Disrupt',
        'Override',
        'Bypass',
        'Neutralize',
        'Deactivate',
        'Analyze',
        'Enhance',
        'Stabilize',
        'Modulate',
        'Amplify'
    ],
    target_system: [
        'Force field',
        'Security system',
        'Energy barrier',
        'Defense grid',
        'Shield matrix',
        'Dampening field',
        'Containment field',
        'Interference pattern',
        'Sensor grid',
        'Communication array'
    ],
    modifier: [
        'Focused',
        'Concentrated',
        'Amplified',
        'Enhanced',
        'Synchronized',
        'Multi-phasic',
        'Quantum',
        'Bio-neural',
        'Adaptive',
        'Harmonic'
    ],
    emission_type2: [
        'Burst',
        'Pulse',
        'Beam',
        'Wave',
        'Field',
        'Signal',
        'Frequency',
        'Pattern',
        'Matrix',
        'Resonance'
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
