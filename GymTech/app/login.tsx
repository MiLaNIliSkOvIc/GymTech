import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>GYMTECH</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>LOG IN</Text>
          <Text style={styles.subtitle}>Dobrodošao nazad</Text>

          {/* Email */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="tvoj@email.com"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>LOZINKA</Text>
            <View style={styles.passwordRow}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#555"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword((p) => !p)}
                style={styles.eyeBtn}
              >
                <Text style={styles.eyeText}>
                  {showPassword ? 'SAKRIJ' : 'PRIKAŽI'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.forgotText}>Zaboravili ste lozinku?</Text>
          </TouchableOpacity>

          {/* Login button */}
          <TouchableOpacity style={styles.loginBtn} activeOpacity={0.85}>
            <Text style={styles.loginBtnText}>PRIJAVA</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#000' },
  flex: { flex: 1 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(50,50,50,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2.5,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },

  content: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 8,
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 40,
    fontWeight: '400',
    letterSpacing: 0.5,
  },

  inputWrapper: { marginBottom: 24 },
  label: {
    color: '#888',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  passwordRow: { flexDirection: 'row', alignItems: 'center' },
  eyeBtn: { paddingLeft: 12, paddingVertical: 10 },
  eyeText: {
    color: '#888',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },

  forgotBtn: { alignSelf: 'flex-end', marginBottom: 40 },
  forgotText: { color: '#888', fontSize: 12, letterSpacing: 0.5 },

  loginBtn: {
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6,
  },
  loginBtnText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
  },
});
