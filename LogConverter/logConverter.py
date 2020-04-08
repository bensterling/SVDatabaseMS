import csv
import socketio
import eventlet
import uuid
import json

sio = socketio.Server()
app = socketio.WSGIApp(sio, static_files={})

@sio.on('connect')
def connect(sid, environ):
    print("Client Connected!")

@sio.on('generateCSV')
def convertToCSV(sid, data):
    print(data)
    fileName = str(uuid.uuid1()) + ".csv"
    with open(fileName, 'w', newline='') as file:
        fieldNames = ['Interval']
        for sensorName in data[0]["data"]:              # Create the CSV headers
            fieldNames.append(sensorName)
        writer = csv.writer(file)                       # Write the headers
        writer.writerow(fieldNames)
        for dataset in data:                            # Create row entires
            row = [dataset["utc"]]
            for sensorData in dataset["data"]:
                row.append(dataset["data"][sensorData]) 
            writer.writerow(row)                        # Write the row entries
        file.close()
    sio.emit('data', fileName)
    
@sio.on('disconnect')
def disconnect(sid):
    print("Client disconnected!")
    
if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('127.0.0.1', 5000)), app)