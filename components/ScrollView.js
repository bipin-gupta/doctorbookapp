import React from 'react'

const ScrollView = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex}>
          {/* Separate view for the first row with dates */}
          {rowIndex === 0 ? (
            <View style={styles.dateRow}>
              {row.map((item, index) => (
                <View key={index} style={styles.dateItem}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            // Separate view for other rows with time slots
            <View style={styles.timeSlotsRow}>
              {row.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeSlot,
                    {
                      backgroundColor:
                        item === selectedTime ? "#CC9B66" : "#FFFFFF",
                    },
                  ]}
                  onPress={() => handleTimeSlotClick(item)}
                >
                  <Text
                    style={{
                      color: item === selectedTime ? "#FFFFFF" : "#000000",
                      fontWeight: item === selectedTime ? "700" : "normal"
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
      </ScrollView>
  )
}

export default ScrollView