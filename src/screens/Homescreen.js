import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const App = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));  // Initial opacity value for the fade animation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image sources for the onboarding effect
  const images = [
    require('../assets/images/image1.jpg'),
    require('../assets/images/image2.jpg'),
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);  // Cleanup on component unmount
  }, [images.length]);

  // Fade-in and fade-out effect when changing the image
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,  // Fade out
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,  // Fade in
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();
  }, [currentImageIndex]);  // Trigger animation when currentImageIndex changes

  // Functions to handle image navigation
  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />

      {/* Hamburger Menu Button on the Left */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
        <View style={styles.menuIcon}></View>
        <View style={styles.menuIcon}></View>
        <View style={styles.menuIcon}></View>
      </TouchableOpacity>

      {/* Dropdown Menu Container */}
      {isDropdownVisible && (
        <Animated.View style={[styles.menuContainer, { zIndex: 1 }]}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Quality Statment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>SEO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Testimonials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Contact Us</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* Fade-in Scrolling Images */}
      <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
        <Image
          source={images[currentImageIndex]}
          style={styles.image}
        />
      </Animated.View>

      {/* Forward and Backward Navigation Buttons */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={goToPreviousImage} style={styles.navButton}>
          <Text style={styles.navButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextImage} style={styles.navButton}>
          <Text style={styles.navButtonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>About Us</Text>
        <<Text></Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // White background for the whole screen
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'flex-start', // Align items to the left side
    paddingTop: 20, // Add some space from the top (status bar space)
    paddingLeft: 20, // Add some space from the left
    position: 'relative', // For zIndex positioning
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20, // Add some space between the logo and the menu button
  },
  menuButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Add space below the button
  },
  menuIcon: {
    backgroundColor: 'white',
    height: 3,
    width: 20,
    marginVertical: 2,
  },
  menuContainer: {
    position: 'absolute',
    top: 200, // Position dropdown below the menu button
    left: 20,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 0.5,
    elevation: 5, // For Android shadow
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'lightgray',
    width: "95%", // Set a fixed width for the dropdown
  },
  dropdownItem: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 3,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  dropdownText: {
    color: 'black',
    fontSize: 16,
  },
  imageContainer: {
    width: '95%',
    height: 200, // Set a fixed height for the image container
    marginTop: 10,
    position: 'relative', // Make sure it's positioned relative for the nav buttons to align properly
  },
  image: {
    width: '100%', // Make the image take up the full width of the container
    height: '100%', // Make the image take up the full height of the container
    resizeMode: "cover",
  },
  navigation: {
    position: 'absolute',
    top: '35%', // Center the buttons vertically
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%', // Full width to space buttons on either side
    zIndex: 2, // Ensure the buttons are above the image
  },
  navButton: {
    backgroundColor: 'transparent', // No background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    
    // borderColor: 'white', // Optional: if you want a border to show the button outline
    // borderWidth: 2, // Optional: for a border around the button
  },
  navButtonText: {
    color: 'white',
    fontSize: 50,
  },
});
