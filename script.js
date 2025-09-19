        const slider = document.getElementById('questionSlider');
        const sliderValue = document.getElementById('sliderValue');

        slider.addEventListener('input', function() {
            sliderValue.textContent = this.value;
        });

        // File upload functionality
        const fileInput = document.getElementById('fileInput');
        const uploadArea = document.querySelector('.upload-area');

        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, preventDefaults, false);
            document.body.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, unhighlight, false);
        });

        function highlight(e) {
            uploadArea.style.borderColor = '#667eea';
            uploadArea.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
        }

        function unhighlight(e) {
            uploadArea.style.borderColor = '#cbd5e1';
            uploadArea.style.backgroundColor = 'rgba(248, 250, 252, 0.5)';
        }

        // Handle dropped files
        uploadArea.addEventListener('drop', handleDrop, false);

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleFiles(files);
        }

        fileInput.addEventListener('change', function() {
            handleFiles(this.files);
        });

        function handleFiles(files) {
            [...files].forEach(file => {
                console.log('File uploaded:', file.name);
                // Here you would typically upload the file to your server
            });
        }

        // Dark Mode Toggle Functionality
        const darkModeToggle = document.getElementById('darkModeToggle');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        // Check for saved dark mode preference
        function checkDarkModePreference() {
            const isDarkMode = localStorage.getItem('darkMode') === 'true';
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                document.body.classList.remove('dark-mode');
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }

        // Toggle dark mode
        function toggleDarkMode() {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            
            // Update icons
            if (isDarkMode) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
            
            // Save preference
            localStorage.setItem('darkMode', isDarkMode);
        }

        // Initialize dark mode on page load
        document.addEventListener('DOMContentLoaded', function() {
            checkDarkModePreference();
            
            // Add click event listener to the toggle button
            darkModeToggle.addEventListener('click', toggleDarkMode);
        });
    
    