import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Wallet({ navigation }) {
  const [bill, setBill] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async () => {
    try {
      // Simulate fetching data from an API (replace with your actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      const data = [
        { id: 1, date: '2023-09-14', content: 'Nội dung 1' },
        { id: 2, date: '2023-09-15', content: 'Nội dung 2' },
        { id: 3, date: '2023-09-15', content: 'Nội dung 3' },
      ];
      setBill(data); // Cập nhật trạng thái Bill sau khi lấy dữ liệu
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    
   

    fetchData();
  }, []);

  const groupedInvoices = bill.reduce((acc, invoice) => {
    const date = new Date(invoice.date).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(invoice);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Balance</Text>
      </View>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Balance</Text>
        <View style={styles.balanceInfo}>
          <View style={styles.balanceDetails}>
            <Text style={styles.balanceAmount}>$100</Text>
            <Text style={styles.balanceName}>Name</Text>
          </View>
          <TouchableOpacity
            style={styles.rechargeButton}
            onPress={() => {
              navigation.navigate("Recharge");
            }}
          >
            <Text style={styles.rechargeButtonText}>Recharge</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator style={styles.loadingIndicator} size="large" color="#FF045F" />
      ) : (
        <FlatList
          data={Object.entries(groupedInvoices)}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => (
            <View style={styles.invoiceContainer}>
              <Text style={styles.invoiceDate}>{item[0]}</Text>
              <View style={styles.invoicePrevContent}>
              {item[1].map((invoice) => (
                <Text key={invoice.id} style={styles.invoiceContent}>
                  {invoice.content}
                </Text>
              ))}
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FF045F",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 10,
  },
  balance: {
    marginHorizontal: 24,
    marginTop: 20,
    padding: 20,
    backgroundColor: "#2454F8",
    borderRadius: 20,
    borderRightWidth: 1,
  },
  balanceText: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
  balanceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  balanceDetails: {
    marginTop: 10,
  },
  balanceAmount: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
  balanceName: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  rechargeButton: {
    backgroundColor: "#FF045F",
    width: 130,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  rechargeButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  invoiceContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 20
  },
  invoiceDate: {
    fontSize: 20,
    fontWeight: "bold",
  },
  invoicePrevContent: {
    marginTop: 10
  },
  invoiceContent: {
    fontSize: 16,
    marginTop: 5,
    
  },
};
