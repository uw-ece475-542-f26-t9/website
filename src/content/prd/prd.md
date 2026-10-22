---
title: Team 9 Project Requirements Document
---

## Project Summary

When exercising, particularly weight lifting, it is often difficult to determine when to stop in order to achieve maximum gain without risking injury; lifting until failure, a common practice, goes beyond the threshold for a higher risk of injury, and fatigue has long been considered a potential risk factor for overuse muscle injuries. Muscle fatigue is a reversible reduction in a muscle’s ability to generate force, so it can’t be read directly. It has to be inferred from signals that change as strength drops. Surface EMG is the standard non-invasive tool: before failure, the signal’s energy consistently shifts from high to low frequencies, and these electrical changes can appear before fatigue shows up in performance. The gap is that most EMG fatigue methods were developed for primarily static tasks, and during dynamic exercise, median frequency tracks fatigue reliably only when analysis focuses on the most repeatable part of each cycle and averages across cycles. Our project aims to detect muscle fatigue to determine a safe but maximally beneficial point at which to end a set of weight-lifting repetitions, using a wearable that automates exactly that by using the motion sensor to gate the EMG. Instead of guessing, a lifter who wants to stop each set two or three reps short of failure would see a live fatigue estimate and a predicted number of reps left. We are focusing on the bicep curl, as detecting fatigue from a varied set of muscles expands the scope beyond what we think is possible in 10 weeks.

## Deliverables

### Components

#### Wearable Device

- A wearable prototype for bicep curls that integrates a MyoWare 2.0 EMG sensor, a MPU6050 IMU, and an ESP32-S3 microcontroller.
- Firmware that acquires and timestamps EMG and motion data for recording and analysis.
- An on-device ML pipeline that estimates the remaining number of repetitions after each completed rep.
- A haptic feedback mechanism that alerts the user when the estimated remaining repetitions reach a predefined threshold.
- Wiring documentation and instructions for sensor placement and device operation.

#### Multi-Platform App

- A mobile application that connects to the wearable through Bluetooth Low Energy (BLE).
- A live display of workout information received from the wearable, including the completed rep count and estimated remaining repetitions.
- A visible connection status and fatigue-related notifications.
- The supported mobile platforms and final display features will be confirmed through integration testing.

### Demonstration

- Demonstrate a user performing bicep curls while wearing the prototype.
- Show EMG and IMU data acquisition and rep detection during the exercise.
- Update the estimated remaining repetitions on the mobile app after each completed rep.
- Demonstrate haptic feedback when the estimate reaches the predefined alert threshold.
- Present evaluation results comparing the model's predictions with the reference labels collected during testing.

## Core Features

- Read EMG (electromyography, the electrical signal a muscle produces when it contracts) in real time and detect a shift toward lower frequencies, which indicates the biceps is tiring.
- Run an edge ML model, meaning one that runs on the device itself rather than in the cloud, that estimates after every rep how many more reps the muscle can likely perform.
- Trigger a haptic motor (a vibration motor) to alert the user to stop once the model detects fatigue.
- Use the IMU (inertial measurement unit, which combines an accelerometer and gyroscope to track motion) to flag bad reps, such as partial range of motion or swinging, and prompt the user to correct them.

## Performance Metrics

- Support at least five to six complete workouts on a single battery charge. To make this testable, define a workout in advance, for example about 45 minutes with four sets of eight to twelve reps.
- Predict the remaining rep count to within five reps of true exhaustion. This target only has meaning once exhaustion is defined, so we must fix that definition before data collection begins. A practical option is the first rep at which force drops below a chosen percentage of the first rep’s force, with that percentage documented in advance.

## Milestones/Timeline

- Milestone 1: Validate the MyoWare sensor. The first goal is to get a usable reading from the MyoWare EMG sensor. Its gain is tuneable in hardware, so the signal strength can be adjusted for each user or muscle. This milestone answers whether the sensor can make precise, isolated measurements of the biceps or only detect general muscle activity, and whether it can resolve the small frequency shifts that fatigue produces. The outcome is a go or no-go decision. If the signal is not good enough, the team evaluates alternative EMG front ends before continuing, since every later milestone depends on this signal.

- Milestone 2: Build the full sensor apparatus and test IMU rep detection. With a usable EMG signal, the team builds the complete wearable, combining the EMG sensor, the IMU, and the ESP32-S3 microcontroller. In this milestone, the IMU must segment reps and identify bad ones. Success means it can separate clean reps from deliberately bad ones, such as partial range of motion or excessive swing, with a stated accuracy measured against video or observer labels.

- Milestone 3: Run the data collection protocol. The team collects a dataset using the full apparatus alongside a load cell, a device that measures force. EMG and IMU data serve as the model’s inputs, and the force drop measured by the load cell serves as the fatigue label. The protocol must specify the exercise, load, tempo, number of subjects, sessions per subject, rest periods, and how bad reps are labeled. Data from several people is essential, since a model trained on one person may not work for others.

- Milestone 4: Validate statistically. Before training the final model, the team scrutinizes the dataset with leave-one-subject-out (LOO) cross-validation, a method that trains the model on all subjects but one, tests it on the held-out person, and repeats this for every subject. This shows whether the model works on people it has never seen, which is the real deployment condition. Additional statistical tests should confirm that the fatigue-related frequency shift is significant, that differences between subjects are larger than chance would explain, and that prediction error stays within the five-rep target at an acceptable confidence level.

- Milestone 5: Train and quantize the model. After validation results are satisfactory, the team trains the final model and then quantizes it, meaning it converts the model’s numbers from high-precision formats into smaller ones. This reduces memory use and speeds up computation on the microcontroller, usually at a small cost in accuracy. The quantized model is tested again on held-out data to confirm it still meets the accuracy target, and it must fit within the ESP32-S3’s memory and complete its per-rep computation within the time available between reps.

## Materials

- **ESP32-S3 N16R8 Development Board**
    - Quantity: 1
    - Purpose: Sensor acquisition and on-device processing.
    - Cost: $11.99

- **HiLetgo MPU6050 IMU Modules**
    - Quantity: 1 pack of 3
    - Purpose: Arm motion sensing and rep segmentation.
    - Cost: $11.79

- **MED PRIDE 70% Isopropyl Alcohol Prep Pads**
    - Quantity: 1 box of 200
    - Purpose: Skin preparation before electrode placement.
    - Cost: $6.99

- **3M Red Dot 2560 Monitoring Electrodes**
    - Quantity: 1 bag of 50
    - Purpose: Skin contact for EMG acquisition.
    - Cost: $11.40

- **MyoWare 2 Muscle Sensor**
    - Quantity: 1
    - Purpose: EMG amplification, filtering, and analog output.
    - Cost: $43.50

- **Additional Materials — Sourcing to Be Confirmed**
    - Battery and suitable power connection.
    - Haptic motor and driver circuit/module.
    - Wearable straps, enclosure, and wire strain relief.
    - Load cell, readout electronics, and mounting fixture.
    - Jumper wires, headers, and soldering supplies, if not available in the lab.

## Risks

- The MyoWare's smoothed output may discard the frequency shift, and the raw signal may be too noisy. Crosstalk and skin impedance changes could also make readings unreliable across days.
- Arm motion can create spikes that look like muscle activity during swinging reps. Gyroscope drift can also blur rep boundaries.
- Grip fatigue or posture changes can cause force drops unrelated to muscle fatigue, corrupting labels. A small dataset can lead the model to learn noise instead.
- Rep-level splits leak correlated data and inflate results. Tuning the threshold after seeing results makes accuracy look better than it is.
- 8-bit quantization can flatten the subtle spectral features the model needs. Mismatches between the Python pipeline and the ESP32 C code can cause train-serve skew.

## Budget

- **Course-funded budget:** $200.00
- **Subtotal of listed purchases:** $85.67
- **Remaining budget before taxes, shipping, and additional purchases:** $114.33

## Team Member Responsibilities

- **Milo**
    - Manage course deliverables and weekly notebooks
    - Handle parts procurement and budget
    - Design and implement the integration and communication between the wearable device and the mobile app.
    - Contribute to development across all software stacks: embedded firmware, mobile app, and on-device ML.

- **Bernardo**
    - Lead design and build of our mobile app through flutter
    - Assist with course deliverables
    - Build the bluetooth connection interface/function and also Demo mode for the app
    - Assist with embedded development tasks, hardware layout, and soldering

- **Adi**
    - Overall design and vision lead
    - Wearable device layout
    - Lead the on-board ML development workflow
    - Data acquisition study and training of the on-board model

- **James— Hardware Integration and Embedded Development**
    - Integrate the MyoWare EMG sensor and MPU6050 IMU with the ESP32-S3.
    - Handle wiring, soldering, and sensor interface configuration.
    - Develop and test firmware for sensor acquisition, timestamping, and data logging.
    - Evaluate signal quality and troubleshoot hardware and acquisition issues.
