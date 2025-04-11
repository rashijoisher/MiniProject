import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns

def load_and_preprocess_data():
    # Load the dataset
    df = pd.read_csv(r"./preprocessedData/CropRecommentationApproach2.csv")
    
    # Select only weather features
    features = df[["temperature", "humidity", "rainfall"]]
    target = df["label"]
    
    # Standardize features
    scaler = StandardScaler()
    features_scaled = scaler.fit_transform(features)
    
    return features_scaled, target

def split_data(features, target):
    # First split: 80% training, 20% temp (validation + test)
    X_train, X_temp, y_train, y_temp = train_test_split(
        features, target, test_size=0.2, random_state=42
    )
    
    # Second split: 50% validation, 50% test (of the 20%)
    X_val, X_test, y_val, y_test = train_test_split(
        X_temp, y_temp, test_size=0.5, random_state=42
    )
    
    return X_train, X_val, X_test, y_train, y_val, y_test

def train_and_evaluate_model(X_train, X_val, X_test, y_train, y_val, y_test):
    # Initialize and train the KNN model
    # Using 9 neighbors as it was found optimal in the original implementation
    knn = KNeighborsClassifier(n_neighbors=9, metric='euclidean')
    knn.fit(X_train, y_train)
    
    # Make predictions
    y_val_pred = knn.predict(X_val)
    y_test_pred = knn.predict(X_test)
    
    # Calculate accuracies
    val_accuracy = accuracy_score(y_val, y_val_pred)
    test_accuracy = accuracy_score(y_test, y_test_pred)
    
    # Cross-validation scores
    cv_scores = cross_val_score(knn, X_train, y_train, cv=5)
    
    # Classification reports
    val_report = classification_report(y_val, y_val_pred)
    test_report = classification_report(y_test, y_test_pred)
    
    # Confusion matrices
    val_cm = confusion_matrix(y_val, y_val_pred)
    test_cm = confusion_matrix(y_test, y_test_pred)
    
    return {
        'val_accuracy': val_accuracy,
        'test_accuracy': test_accuracy,
        'cv_scores': cv_scores,
        'val_report': val_report,
        'test_report': test_report,
        'val_cm': val_cm,
        'test_cm': test_cm
    }

def plot_confusion_matrix(cm, title, labels):
    plt.figure(figsize=(10, 8))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=labels, yticklabels=labels)
    plt.title(title)
    plt.ylabel('True Label')
    plt.xlabel('Predicted Label')
    plt.tight_layout()
    plt.savefig(f'{title.lower().replace(" ", "_")}.png')
    plt.close()

def main():
    # Load and preprocess data
    print("Loading and preprocessing data...")
    features, target = load_and_preprocess_data()
    
    # Print dataset information
    print(f"\nTotal number of samples: {len(features)}")
    print(f"Number of features: {features.shape[1]}")
    print(f"Number of unique crops: {len(target.unique())}")
    print("\nFeatures used: temperature, humidity, rainfall")
    
    # Split data
    print("\nSplitting data into train, validation, and test sets...")
    X_train, X_val, X_test, y_train, y_val, y_test = split_data(features, target)
    
    print(f"Training set size: {len(X_train)} samples")
    print(f"Validation set size: {len(X_val)} samples")
    print(f"Test set size: {len(X_test)} samples")
    
    # Train and evaluate model
    print("\nTraining and evaluating model...")
    results = train_and_evaluate_model(X_train, X_val, X_test, y_train, y_val, y_test)
    
    # Print results
    print("\n=== Model Evaluation Results ===")
    print(f"\nValidation Accuracy: {results['val_accuracy']:.4f}")
    print(f"Test Accuracy: {results['test_accuracy']:.4f}")
    print(f"\nCross-validation Scores: {results['cv_scores']}")
    print(f"Mean CV Score: {np.mean(results['cv_scores']):.4f}")
    
    print("\n=== Validation Set Classification Report ===")
    print(results['val_report'])
    
    print("\n=== Test Set Classification Report ===")
    print(results['test_report'])
    
    # Get unique labels for confusion matrix
    labels = sorted(target.unique())
    
    # Plot confusion matrices
    print("\nGenerating confusion matrix plots...")
    plot_confusion_matrix(results['val_cm'], 'Weather Based Validation Set Confusion Matrix', labels)
    plot_confusion_matrix(results['test_cm'], 'Weather Based Test Set Confusion Matrix', labels)
    
    print("\nPlots saved as 'weather_based_validation_set_confusion_matrix.png' and 'weather_based_test_set_confusion_matrix.png'")

if __name__ == "__main__":
    main() 