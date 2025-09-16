import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      assignmentAlerts: true,
      gradeUpdates: true,
      eventReminders: false
    },
    privacy: {
      profileVisibility: 'classmates',
      showGrades: true,
      showAttendance: false,
      contactVisibility: 'teachers'
    },
    account: {
      language: 'english',
      timezone: 'est',
      dateFormat: 'mm/dd/yyyy'
    },
    communication: {
      allowMessages: 'all',
      emailFrequency: 'weekly',
      digest: true
    },
    security: {
      twoFactor: false,
      loginAlerts: true,
      sessionTimeout: '30'
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      density: 'comfortable'
    }
  });

  const handleToggle = (category, field) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: !prev[category][field]
      }
    }));
  };

  const handleSelectChange = (category, field, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const renderNotifications = () => (
    <div className="settings-section">
      <h2>Notification Preferences</h2>
      <p>Manage how you receive alerts and updates</p>
      
      <div className="settings-group">
        <div className="setting-item">
          <div className="setting-info">
            <h4>Email Notifications</h4>
            <p>Receive important updates via email</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.notifications.email}
              onChange={() => handleToggle('notifications', 'email')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>SMS Alerts</h4>
            <p>Get text message alerts for urgent notices</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.notifications.sms}
              onChange={() => handleToggle('notifications', 'sms')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Push Notifications</h4>
            <p>Receive alerts on your mobile device</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.notifications.push}
              onChange={() => handleToggle('notifications', 'push')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Assignment Alerts</h4>
            <p>Get notified when new assignments are posted</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.notifications.assignmentAlerts}
              onChange={() => handleToggle('notifications', 'assignmentAlerts')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Grade Updates</h4>
            <p>Receive notifications when grades are posted</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.notifications.gradeUpdates}
              onChange={() => handleToggle('notifications', 'gradeUpdates')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Event Reminders</h4>
            <p>Get reminders for school events and activities</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.notifications.eventReminders}
              onChange={() => handleToggle('notifications', 'eventReminders')}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderPrivacy = () => (
    <div className="settings-section">
      <h2>Privacy Settings</h2>
      <p>Control who can see your information</p>
      
      <div className="settings-group">
        <div className="setting-item">
          <div className="setting-info">
            <h4>Profile Visibility</h4>
            <p>Who can view your profile</p>
          </div>
          <select 
            className="settings-select"
            value={settings.privacy.profileVisibility}
            onChange={(e) => handleSelectChange('privacy', 'profileVisibility', e.target.value)}
          >
            <option value="everyone">Everyone</option>
            <option value="classmates">Classmates Only</option>
            <option value="teachers">Teachers Only</option>
            <option value="none">No One</option>
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Show Grades</h4>
            <p>Allow others to see your grades</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.privacy.showGrades}
              onChange={() => handleToggle('privacy', 'showGrades')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Show Attendance</h4>
            <p>Allow others to see your attendance record</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.privacy.showAttendance}
              onChange={() => handleToggle('privacy', 'showAttendance')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Contact Visibility</h4>
            <p>Who can see your contact information</p>
          </div>
          <select 
            className="settings-select"
            value={settings.privacy.contactVisibility}
            onChange={(e) => handleSelectChange('privacy', 'contactVisibility', e.target.value)}
          >
            <option value="everyone">Everyone</option>
            <option value="classmates">Classmates Only</option>
            <option value="teachers">Teachers Only</option>
            <option value="none">No One</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderAccount = () => (
    <div className="settings-section">
      <h2>Account Preferences</h2>
      <p>Customize your account experience</p>
      
      <div className="settings-group">
        <div className="setting-item">
          <div className="setting-info">
            <h4>Language</h4>
            <p>Select your preferred language</p>
          </div>
          <select 
            className="settings-select"
            value={settings.account.language}
            onChange={(e) => handleSelectChange('account', 'language', e.target.value)}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Timezone</h4>
            <p>Set your local timezone</p>
          </div>
          <select 
            className="settings-select"
            value={settings.account.timezone}
            onChange={(e) => handleSelectChange('account', 'timezone', e.target.value)}
          >
            <option value="est">Eastern Time (EST)</option>
            <option value="cst">Central Time (CST)</option>
            <option value="mst">Mountain Time (MST)</option>
            <option value="pst">Pacific Time (PST)</option>
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Date Format</h4>
            <p>How dates are displayed</p>
          </div>
          <select 
            className="settings-select"
            value={settings.account.dateFormat}
            onChange={(e) => handleSelectChange('account', 'dateFormat', e.target.value)}
          >
            <option value="mm/dd/yyyy">MM/DD/YYYY</option>
            <option value="dd/mm/yyyy">DD/MM/YYYY</option>
            <option value="yyyy-mm-dd">YYYY-MM-DD</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderCommunication = () => (
    <div className="settings-section">
      <h2>Communication Preferences</h2>
      <p>Manage how others can contact you</p>
      
      <div className="settings-group">
        <div className="setting-item">
          <div className="setting-info">
            <h4>Allow Messages From</h4>
            <p>Who can send you direct messages</p>
          </div>
          <select 
            className="settings-select"
            value={settings.communication.allowMessages}
            onChange={(e) => handleSelectChange('communication', 'allowMessages', e.target.value)}
          >
            <option value="all">Everyone</option>
            <option value="classmates">Classmates Only</option>
            <option value="teachers">Teachers Only</option>
            <option value="none">No One</option>
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Email Summary Frequency</h4>
            <p>How often you receive activity summaries</p>
          </div>
          <select 
            className="settings-select"
            value={settings.communication.emailFrequency}
            onChange={(e) => handleSelectChange('communication', 'emailFrequency', e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="never">Never</option>
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Weekly Digest</h4>
            <p>Receive a summary of weekly activities</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.communication.digest}
              onChange={() => handleToggle('communication', 'digest')}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="settings-section">
      <h2>Security Settings</h2>
      <p>Manage your account security</p>
      
      <div className="settings-group">
        <div className="setting-item">
          <div className="setting-info">
            <h4>Two-Factor Authentication</h4>
            <p>Add an extra layer of security to your account</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.security.twoFactor}
              onChange={() => handleToggle('security', 'twoFactor')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Login Alerts</h4>
            <p>Get notified when someone logs into your account</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.security.loginAlerts}
              onChange={() => handleToggle('security', 'loginAlerts')}
            />
            <span className="slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Session Timeout</h4>
            <p>Automatically log out after inactivity</p>
          </div>
          <select 
            className="settings-select"
            value={settings.security.sessionTimeout}
            onChange={(e) => handleSelectChange('security', 'sessionTimeout', e.target.value)}
          >
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="120">2 hours</option>
            <option value="never">Never</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderAppearance = () => (
    <div className="settings-section">
      <h2>Appearance Settings</h2>
      <p>Customize how EduPrime looks</p>
      
      <div className="settings-group">
        <div className="setting-item">
          <div className="setting-info">
            <h4>Theme</h4>
            <p>Choose between light and dark mode</p>
          </div>
          <select 
            className="settings-select"
            value={settings.appearance.theme}
            onChange={(e) => handleSelectChange('appearance', 'theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto (System)</option>
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Font Size</h4>
            <p>Adjust the text size across the application</p>
          </div>
          <select 
            className="settings-select"
            value={settings.appearance.fontSize}
            onChange={(e) => handleSelectChange('appearance', 'fontSize', e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">Extra Large</option>
          </select>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4>Density</h4>
            <p>Control the spacing of interface elements</p>
          </div>
          <select 
            className="settings-select"
            value={settings.appearance.density}
            onChange={(e) => handleSelectChange('appearance', 'density', e.target.value)}
          >
            <option value="compact">Compact</option>
            <option value="comfortable">Comfortable</option>
            <option value="spacious">Spacious</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'notifications': return renderNotifications();
      case 'privacy': return renderPrivacy();
      case 'account': return renderAccount();
      case 'communication': return renderCommunication();
      case 'security': return renderSecurity();
      case 'appearance': return renderAppearance();
      default: return renderNotifications();
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Account Settings</h1>
        <p>Manage your preferences and account details</p>
      </div>

      <div className="settings-content">
        <div className="settings-sidebar">
          <div className="settings-nav">
            <button 
              className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
            <button 
              className={`nav-item ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              Privacy
            </button>
            <button 
              className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              Account
            </button>
            <button 
              className={`nav-item ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
            <button 
              className={`nav-item ${activeTab === 'appearance' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              Appearance
            </button>
          </div>
          
          <div className="settings-help">
            <h3>Need Help?</h3>
            <p>Contact school administration for account issues</p>
            <button className="help-button">Contact Support</button>
          </div>
        </div>

        <div className="settings-main">
          {renderContent()}
          
          <div className="settings-actions">
            <button className="btn-secondary">Cancel</button>
            <button className="btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;