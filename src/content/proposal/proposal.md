---
title: Team 9 Project Proposal
---

## Overview

When exercising, particularly weight lifting, it is often difficult to determine
when to stop in order to achieve maximum gain without risking injury. Lifting until
failure, a common practice, goes beyond the threshold for a higher risk of injury.
Our project aims to detect muscle fatigue to determine a safe but maximally beneficial
point at which to end a set of weight-lifting repetitions. We are focusing on the
bicep curl, as detcting fatigue from a varied set of muscles expands the scope beyond
what we think is possible in 10 weeks.

## Motivations

### Background

Muscle fatigue is a reversible reduction in a muscle's ability to generate force, so it can't be read directly. It has to be inferred from signals that change as strength drops. Surface EMG is the standard non-invasive tool: before failure, the signal's energy consistently shifts from high to low frequencies, and these electrical changes can appear before fatigue shows up in performance. Fatigue has also long been considered a potential risk factor for overuse muscle injuries. The gap is that most EMG fatigue methods were developed for primarily static tasks. During dynamic exercise, median frequency tracks fatigue reliably only when analysis focuses on the most repeatable part of each cycle and averages across cycles. Our wearable automates exactly that, using the motion sensor to gate the EMG.

### Examples

_The gym-goer:_ a lifter wants to stop each set two or three reps short of failure but currently guesses. The wearable shows a live fatigue estimate and a predicted number of reps left. This matters because accumulated fatigue shapes the training effect. In one 8-week squat study, stopping sets at 40% velocity loss produced more quadriceps growth than stopping at 20%, but reduced the share of the fastest muscle fibers, which the 20% group preserved.

_Injury prevention:_ late-set form breakdown, such as shoulder swing, can be flagged before the sloppy reps begin. We treat this as motivation, not a tested claim. Rehabilitation and workplace monitoring are future extensions.

### Related Technology

Lab EMG systems established the fatigue signature, but they need controlled conditions. EMG smart clothing from Athos and Myontec brought muscle tracking to athletes, yet a 2018 review found no published validation of Athos fatigue data, and Myontec measures a fatigue threshold, which cannot track fatigue as it builds over time. EMG+IMU research prototypes exist, but most classify coarse fatigue states or predict subjective exertion ratings. Velocity-loss devices work well, with velocity loss correlating with post-exercise lactate at r = 0.97 for squats, but speed only drops once performance is already failing. Muscle-oxygen sensors start at $817 and measure metabolic strain rather than strength, though Garmin's September 2026 acquisition of Moxy shows large companies entering the space. Our project differs in three ways: strength-loss labels, a velocity-only baseline, and roughly $300 of hardware.

## Goals

### Components

The project will contain three main components:

1. A wearable with an EMG sensor and an IMU that collects data about the bicep and arm movement.
2. An on-board ML algorithm that predicts the remaining number of reps a user can safely complete in their set, attached to a haptic on the arm to provide user feedback.
3. A mobile app built with Flutter, connected to the wearable via Bluetooth, that displays a combination of live information such as remaining reps in an active set, and cumulative information such as a history of workouts and improvements to perrsonal fatigue over time. Likely, we can show a visualization of activity in the muscle, too.

### Demo

Our demo will consist of a new user (TA or professor) completing a set of bicep curls while wearing the device. The sensor will monitor their fatigue, anticipate a healthy number of reps after which to stop using the trained on-board model, and notify the user on both the app and via haptic when they are approaching the end of their set, and when they should stop to avoid injury.

### Additional Scope/Possible Distinctions

- A training study, collecting training data for the on-board ML model from ~ 20 subjects.
- Comparisons between predictive capability of the model when trained on just a user's own data, compared to the model trained on the complete test set.

## Design

### Potential Solutions

- Core EMG data will be collected by an EMG sensor on the bicep with three elecrtodes: two on the bicep and one on the elbow.
- An IMU mounted on the forearm will provide data about arm angle and position, which will combine with EMG data to monitor successful reps and fatigue.
- A microcontroller running a small on-board ML model trained on test data to interpret data from the sensors and predict remaining safe reps.
- The microcontroller will communicate via BLE with a mobile device to provide real-time data to the app.

### Required Materials

- ESP32 microcontroller
- EMG Sensor: most likely a MyoWare 2.0. We will test this early (week 2) and determine if the data is provides is sufficient, or if we need to transition to a more difficult to work with sensor that has customizable gain.
- IMU (HiLetGo MPU6050)
- Haptic feedback module
- Electrodes
- Power supply (battery)
